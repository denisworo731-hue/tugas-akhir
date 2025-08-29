export default function Header() {
  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">Hi, Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          className="rounded-full w-8 h-8"
        />
      </div>
    </header>
  );
}
