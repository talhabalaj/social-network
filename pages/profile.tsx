import { NextPage } from "next";
import { useSelector } from "react-redux";
import { RootState } from "../interfaces/state";
import { useRouter } from "next/dist/client/router";
import Layout from "../components/Layout";

const ProfilePage: NextPage = () => {
    const auth = useSelector((state: RootState) => state.auth);
    const router = useRouter();

    if (!auth.isAuthenticated) {
        router?.push('/login');
        return <p>Not logged in</p>;
    }

    return (
        <Layout title={`${auth.user?.name} | NextJS`}>
            <div>
                <p>Name: {auth.user?.name}</p>
                <p>Email: {auth.user?.email}</p>
                <p>Userame: {auth.user?.userName}</p>
            </div>
        </Layout>
    );
}

export default ProfilePage;