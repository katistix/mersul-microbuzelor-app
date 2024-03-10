import Link from "next/link";

export const Header = () => {
    return (
        <header className="mb-4">
            <nav className="p-4 flex justify-between items-center">
                <p className="font-bold md:text-3xl">Mersul Microbuzelor</p>
                <a href="https://www.buymeacoffee.com/katistix" target="_blank">
                    <img
                        className="h-6 md:h-8"
                        src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png"
                        alt="Buy Me A Coffee"
                    />
                </a>
            </nav>
        </header>
    );
};
