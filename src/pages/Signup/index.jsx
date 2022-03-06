const Signup = () => {
    return (
        <div class="container">
        <div class="row m-5 no-gutters shadow-lg">
          <div class="col-md-6 d-none d-md-block">
            <img src="https://images.unsplash.com/photo-1586077427825-15dca6b44dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" class="img-fluid" style="min-height:100%;" />
          </div>
          <div class="col-md-6 bg-white p-5">
            <h4 class="pb-3">Sign up</h4>
            <p>Welcome to our community</p>
            <div class="form-style">
              <form>
                <div class="form-group pb-3">
                  <input type="email" placeholder="Email or Phone Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="form-group pb-3">
                  <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1" /> <i class="image1"><img src="https://img.icons8.com/ios-glyphs/64/000000/invisible.png" /></i>
                </div>
                <div class="pb-2">
                  <button type="submit" class="btn btn-dark w-100 font-weight-bold mt-2">Create Account</button>
                </div>
              </form>
              <div class="pt-4 text-center">
                By creating and account, you agree to the <a href="#">Terms and conditions</a> and the <a href="#">Privacy Policy.</a>
              </div>
              <div class="pt-4 text-center">
                Already have an account <a href="#">Login</a>
              </div>
            </div>
       
          </div>
        </div>
      </div>
    );
}
 
export default Signup;