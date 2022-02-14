import { useSelector } from "react-redux";
import SectionLayout from "components/templates/SectionLayout";
import Publihser from "features/dashboard/Publisher";
import Author from "features/dashboard/Author";
import { User } from "types/user";
import { RootState } from "app/store";

function Dashboard() {
    const user: User = useSelector((state: RootState) => state.user);
    return (
        <SectionLayout>
            {user.isPublisher ? <Publihser nickName={user.user_nickname} /> : <Author></Author>}
        </SectionLayout>
    );
}

export default Dashboard;
