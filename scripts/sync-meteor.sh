#!/bin/bash
set -e

SRC="meteor-web/web/src"
DEST="src/meteor-src"
MODULES_JSON="/home/pizzav/IdeaProjects/PizzaVsAddon/build/generated/meteor-web/modules.json"

rm -rf "$DEST"
mkdir -p "$DEST/lib" "$DEST/store" "$DEST/components/meteor"

cp "$MODULES_JSON" "$DEST/lib/modules.json"
cp "$SRC/lib/modules-data.ts" "$DEST/lib/"
cp "$SRC/lib/utils.ts" "$DEST/lib/"
cp "$SRC/store/meteor-store.ts" "$DEST/store/"
cp "$SRC/components/meteor/"*.tsx "$DEST/components/meteor/"

sed -i \
  -e 's|from "@/lib/|from "../lib/|g' \
  -e 's|from "@/store/|from "../store/|g' \
  -e 's|from "./|from "./|g' \
  "$DEST/store/meteor-store.ts"

for f in "$DEST/components/meteor/"*.tsx; do
  sed -i \
    -e 's|from "@/lib/|from "../../lib/|g' \
    -e 's|from "@/store/|from "../../store/|g' \
    -e 's|from "./|from "./|g' \
    "$f"
done

SETTINGS="$DEST/components/meteor/ModuleSettingsScreen.tsx"

python3 << 'PYEOF'
path = "src/meteor-src/components/meteor/ModuleSettingsScreen.tsx"
with open(path) as f:
    content = f.read()

content = 'import { createPortal } from "react-dom";\n\n' + content
content = content.replace(
    'className="absolute inset-0 z-50 bg-background/40 backdrop-blur-[2px]"',
    'className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]"'
)
content = content.replace(
    'className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-background/40 backdrop-blur-[2px]"',
    'className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]"'
)

content = content.replace(
    'onClick={() => toggleFavorite(module.id)}\n            className="p-1 hover:scale-110 transition-transform"',
    'onClick={() => toggleFavorite(module.id)}\n            onPointerDown={(e) => e.stopPropagation()}\n            className="p-1 hover:scale-110 transition-transform"'
)
content = content.replace(
    'onClick={() => openModule(null)}\n            className="p-1 text-header-text hover:text-white"',
    'onClick={() => openModule(null)}\n            onPointerDown={(e) => e.stopPropagation()}\n            className="p-1 text-header-text hover:text-white"'
)

lines = content.split('\n')
in_settings_fn = False
depth = 0
start_line = -1
end_line = -1
for i, line in enumerate(lines):
    if 'export function ModuleSettingsScreen' in line:
        in_settings_fn = True
        continue
    if in_settings_fn and line.strip() == 'return (':
        lines[i] = '  return createPortal('
        start_line = i
        depth = 0
        for j in range(i, len(lines)):
            depth += lines[j].count('(') - lines[j].count(')')
            if depth == 0:
                end_line = j
                break
        break

if end_line > 0:
    closing = lines[end_line]
    lines[end_line] = closing.replace(');', ',\n    document.body\n  );')

content = '\n'.join(lines)
with open(path, 'w') as f:
    f.write(content)

print("Portal patch applied")
PYEOF

echo "meteor-web source synced to $DEST (with portal patch)"
