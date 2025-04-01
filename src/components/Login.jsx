import React from "react";

function Login() {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="login" className="modal glass">
        <div className="modal-box max-w-md">
          <h3 className="font-bold text-2xl uppercase text-center mt-4"> Welcome </h3>
          <p className="text-[13px] text-center mb-8 opacity-60">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

          <form action="" className="flex flex-col justify-center items-center gap-2 mb-8">
            <label className="input">
              <i className="bi bi-person flex justify-center items-center text-[15px] opacity-50"></i>
              <input type="text" autoComplete="username" className="grow" placeholder="Username" />
            </label>
            <label className="input">
              <i className="bi bi-key flex justify-center items-center text-[15px] opacity-50"></i>
              <input type="password" autoComplete="current-password" className="grow" placeholder="Password" />
            </label>
            <button className="btn w-[320px] flex justify-center items-center gap-3 mt-4">
              {/* <i className="bi bi-google opacity-70"></i> */}
              <span className="opacity-70">Submit</span>
            </button>
            <div>
              <div className="divider w-[320px]"><span className="text-gray-300">or</span></div>
            </div>
            <button className="btn w-[320px] flex justify-center items-center gap-3">
              <i className="bi bi-google opacity-70"></i>
              <span className="opacity-70">Google</span>
            </button>
          </form>


        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Login;