import './SignUp.css'

export default function SignUp() {
  return (
    <div className='sign-up _container'>
        <h1>DON’T FORGET TO SIGN UP</h1>
        <hr />
        <p>Find out early about all upcoming promotions and new product releases with
        our newsletter.</p>
        <form>
            <input type="email" required placeholder='Enter your email address.....'/>
            <button>SUBSCRIBE</button>
        </form>
    </div>
  )
}
