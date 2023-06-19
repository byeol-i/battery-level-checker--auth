import Auth from "@/service/firebase/auth";
import dynamic from "next/dynamic";

const Login = dynamic(
    () =>
        import("../../component/layout/Login/Login").catch((err) => {
            return () => <>Can't load Login... {err}</>;
        }),
    {
        loading: () => <></>,
        ssr: false,
    }
);

// const Logout = dynamic(
//     () =>
//         import("../../component/atom/Logout/Logout").catch((err) => {
//             return () => <>Can't load... {err}</>;
//         }),
//     {
//         loading: () => <></>,
//         ssr: false,
//     }
// );

export default function Home() {
    const auth = new Auth();

    return (
        <div>
            {/* <Logout onLogOut={auth.logout}></Logout> */}
            <Login auth={auth}></Login>
        </div>
    );
}
