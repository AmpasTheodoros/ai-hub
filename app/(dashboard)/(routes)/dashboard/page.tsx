//app/page.tsx

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
    return (
        <div>
            <p>DashBaord Page</p>
            <UserButton afterSignOutUrl="/"/>
        </div>
    );
}

export default DashboardPage
