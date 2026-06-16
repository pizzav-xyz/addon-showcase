import { Github, Twitter, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-[#0a0a0f] border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-xl font-display font-bold text-pizza-orange mb-2">
              PizzaV's Addon
            </h3>
            <p className="text-gray-500 text-sm">
              Definitely not a scam. Trust us.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/pizzav-xyz/meteor-web" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-gray-400 hover:text-white">
              <Github size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-gray-400 hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-gray-400 hover:text-white">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-600 text-sm">
          <p>
            No totems were harmed in the making of this addon.
            <br />
            TrouserStreak's code was harmed though.
          </p>
          <p className="mt-2 text-gray-700">
            © 2024 PizzaV. All rights reserved. (not really)
          </p>
        </div>
      </div>
    </footer>
  );
}
