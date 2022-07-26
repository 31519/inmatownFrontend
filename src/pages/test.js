import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { wrapper} from "../redux/store"
import { localListAction } from "../redux/actions/advertiseActions";



const Test = () => {
    // const 
    //     {locals}
    //      = useSelector((state) => state.localList);
    const localList = useSelector((state) => state.localList);

    const {
      error: listLocalError,
      loading: listLocalLoading,
      locals: listLocal,
      pages,
      page,
    } = localList;

  console.log("rooms", listLocal);
    return (
        <div>
            <p>Test</p>
        </div>
    )

}

export default Test

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req, res }) => {
//       await store.dispatch(localListAction(req));
//     }
    
// );