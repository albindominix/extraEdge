import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slice/users";
import Loader from "../components/Loader";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const { users, isLoading } = useSelector((state) => state.users); //for getting the data we use useSelector

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <main className="">
      <Wrapper>
        {/* Product Grid Start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-14 px-5 md:px-0">
          {users?.map((user, index) => (
            <ProductCard key={index} user={user} />
          ))}
        </div>
        {/* Product Grid End */}
      </Wrapper>
    </main>
  );
}

export default Home;
