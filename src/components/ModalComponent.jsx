import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userUpdated } from "../redux/slice/users";
import EditIcon from "./icons/editIcon";
import CloseIcon from "./icons/CloseIcon";

export default function ModalComponent({ user }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    setShowModal(false);
    dispatch(userUpdated({ ...user, ...data }));
    reset();
  };

  return (
    <>
      <div className="flex justify-center " onClick={() => setShowModal(true)}>
        <EditIcon />
      </div>
      {showModal ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative max-w-6xl my-6 mx-auto ">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start md:w-[40rem] justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Basic Modal</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => {
                        setShowModal(false);
                        reset();
                      }}
                    >
                      <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                        <CloseIcon />
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div className="flex flex-col items-end">
                      <label className="flex w-full justify-end items-center mb-6">
                        <span className="text-gray-700 mr-6">* Name</span>
                        <input
                          defaultValue={user?.name}
                          name="name"
                          id="name"
                          {...register("name", {
                            required: true,
                            maxLength: 30,
                          })}
                          type="text"
                          className="block w-[60%] mt-1 p-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none"
                          placeholder="Joe Bloggs"
                        />
                      </label>
                      {errors.name && errors.name.type === "required" && (
                        <span className="text-red-600 m-3">
                          This is required
                        </span>
                      )}
                      {errors.name && errors.name.type === "maxLength" && (
                        <span className="text-red-600 m-3">
                          Max length exceeded
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col items-end">
                      <label className="flex w-full justify-end items-center mb-6">
                        <span className="text-gray-700 mr-6">* Email</span>
                        <input
                          defaultValue={user?.email}
                          name="email"
                          id="email"
                          {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                          })}
                          type="text"
                          className="block w-[60%] mt-1 p-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none"
                          placeholder="Email id"
                        />
                      </label>
                      {errors.email && errors.email.type === "pattern" && (
                        <span className="text-red-600 m-3">invalid email</span>
                      )}
                      {errors.email && errors.email.type === "required" && (
                        <span className="text-red-600 m-3">
                          This is required
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col items-end">
                      <label className="flex w-full justify-end items-center mb-6">
                        <span className="text-gray-700 mr-6">* Phone</span>
                        <input
                          defaultValue={user?.phone}
                          name="phone"
                          id="phone"
                          {...register("phone", {
                            required: true,
                          })}
                          type="text"
                          className="block w-[60%] mt-1 p-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none"
                          placeholder="Phone Number"
                        />
                      </label>
                      {errors.phone && errors.phone.type === "required" && (
                        <span className="text-red-600 m-3">
                          This is required
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col items-end">
                      <label className="flex w-full justify-end items-center mb-6">
                        <span className="text-gray-700 mr-6">* Website</span>
                        <input
                          defaultValue={user?.website}
                          name="website"
                          id="website"
                          {...register("website", {
                            required: true,
                          })}
                          type="text"
                          className="block w-[60%] mt-1 p-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none"
                          placeholder="Website Link"
                        />
                      </label>
                      {errors.website && errors.website.type === "required" && (
                        <span className="text-red-600 m-3">
                          This is required
                        </span>
                      )}
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-600-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        reset();
                      }}
                    >
                      Close
                    </button>
                    <button
                      className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      disabled={isSubmitting}
                      //   onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
