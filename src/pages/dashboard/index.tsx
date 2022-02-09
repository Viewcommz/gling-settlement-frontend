import { useSelector } from "react-redux";
import SectionLayout from "layout/SectionLayout";
import Publihser from "components/templates/dashboard/Publisher";
import Author from "components/templates/dashboard/Author";
import { User } from "types/user"
import { RootState } from "store";

function Dashboard() {
    const user: User = useSelector((state: RootState) => state.user);

    return (
        <SectionLayout>
            {user.isPublisher ? 
                <Publihser
                    nickName={user.user_nickname}
                />
                : <Author></Author>
            }
        </SectionLayout>
    )
}

export default Dashboard;