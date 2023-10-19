import React from "react";
import ModalComponent from "./ModalComponent";
import { useDispatch } from "react-redux";
import { userDeleted, userUpdated } from "../redux/slice/users";
import DeleteIcon from "./icons/deleteIcon";
import RatingIcon from "./icons/RatingIcon";

function ProductCard({ user }) {
  const dispatch = useDispatch();
  
  return (
    <>
      <div
        className="relative flex flex-col bg-transparent shadow p-4 rounded-2xl"
        data-nc-id="ProductCard"
      >
        <div className="relative flex-shrink-0 bg-slate-50 rounded-3xl overflow-hidden z-1 group">
          <div>
            <div className=" flex justify-center aspect-w-11 aspect-h-12 w-full h-auto">
              <div className="relative mx-3 mt-3 flex justify-center h-60 overflow-hidden rounded-xl">
                <img
                  className="object-cover tex "
                  src={user?.avatar}
                  alt="product image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 px-2.5 pt-5 pb-2.5">
          <div>
            <h2 className="text-base font-semibold text-black line-clamp-1">
              {user?.name}
            </h2>
            <p className="text-sm font-normal text-slate-500 mt-1 line-clamp-2">
              {user?.email}
            </p>
            <p className="text-sm font-normal text-slate-500 mt-1 line-clamp-2">
              {user?.phone}
            </p>
            <p className="text-sm font-normal text-slate-500 mt-1 line-clamp-2">
              {user?.website}
            </p>
          </div>
        </div>
        <div className="flex justify-around bg-slate-50 p-3">
          <div className="cursor-pointer" onClick={()=>dispatch(userUpdated({...user,like:!user.like}))}>
            <RatingIcon fill={user?.like ?'red':'none'}/>
          </div>
          <div className="cursor-pointer">
            <ModalComponent user={user} />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => dispatch(userDeleted(user?.id))}
          >
            <DeleteIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
