import {
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import ThemeToggle from "../ToggleTheme";

const SubHeader = () => {
  return (
    <div id="subHeader" className="bg-contrast w-full h-12">
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        <div id="subHeader-contact" className="flex gap-4 text-gray-100">
          <a href="mailto:shop@example.com" className="flex gap-2">
            <IconMail /> shop@example.com
          </a>
          <a href="callto:+5514991234567" className="flex gap-2">
            <IconBrandWhatsapp />
            +55 14 99123-4567
          </a>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default SubHeader;
