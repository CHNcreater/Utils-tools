

export function Footer() {
    return (
        <footer className="sticky bottom-0 left-0 right-0 flex items-center justify-center w-full h-16 bg-gray-200 dark:bg-gray-800">
        <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} FreeLance Kingdom. All rights reserved.
        </p>
        </footer>
    );
}