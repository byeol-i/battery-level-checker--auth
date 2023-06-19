import { useEffect, useState } from "react";

export default function Home(props: any) {
    const [result, setResult] = useState<string>("");
    const [isLoad, setIsLoad] = useState<boolean>(false);

    useEffect(() => {
        if (!isLoad) {
            const res = localStorage.getItem("UserCredential");
            if (res != null) {
                const req = new Request("/request/api/v1/user/custom-token", {
                    method: "POST",
                    headers: {
                        Authorization:
                            "Bearer " + JSON.parse(res)._tokenResponse.idToken,
                    },
                });

                fetch(req)
                    .then((res) => res.json())
                    .then((res) => {
                        if (res.code == 200) {
                            setResult(res.data);
                        }
                        console.log(res);
                        setIsLoad(true);
                    });
            }
        }
    }, []);
    return <>{result}</>;
}
