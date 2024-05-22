import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden dashboard-container">
            <div className="w-full flex-none md:w-64 sidenav-container">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12 dashboard-children-container">{children}</div>
        </div>
    );
}