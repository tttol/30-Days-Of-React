import './Form.css'

function Form() {
    return (
        <div className='Form'>
            <div className='formBox'>
                <h1 className='title'>SUBSCRIBE</h1>
                <p className='description'>Sign up with your email address to receive news and updates.</p>
                <form action="">
                    <div className='inputBox'>
                        <input type='text' placeholder='First name'/>
                        <input type='text' placeholder='Last name'/>
                        <input type='email' placeholder='Email'/>
                    </div>
                    <div className='buttonBox'>
                        <button className='submitButton'>Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;