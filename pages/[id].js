import { useRouter } from "next/router";


const id = () => {
    const router=useRouter();
    const {id}=router.query;

    return (
        <div>
            {id}のページです。
        </div>
    );
}

export default id;