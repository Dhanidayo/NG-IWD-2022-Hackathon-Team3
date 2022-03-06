const ResetPassword = () => {
    return (
        <div class="container">
        <div class="row m-5 no-gutters shadow-lg">
          <div class="col-md-6 d-none d-md-block">
            <img src="https://images.unsplash.com/photo-1586077427825-15dca6b44dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" class="img-fluid" style="min-height:100%;" />
          </div>
          <div class="col-md-6 bg-white p-5">
            <h4 class="pb-3">Reset Password</h4>
            <p>Reset your password</p>
            <div class="form-style">
              <form>
                <div class="form-group pb-3">
                  <input type="email" placeholder="New Password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="form-group pb-3">
                  <input type="email" placeholder="Confirm New Password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="pb-2">
                  <button type="submit" class="btn btn-dark w-100 font-weight-bold mt-2">Reset Password</button>
                </div>
              </form>
            </div>
       
          </div>
        </div>
      </div>
    );
}
 
export default ResetPassword;