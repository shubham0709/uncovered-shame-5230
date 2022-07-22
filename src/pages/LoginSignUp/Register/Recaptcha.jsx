import ReCAPTCHA from "react-google-recaptcha"
import "./Recaptcha.module.css"

function onChange(value) {
  console.log("Captcha value:", value)
}

export default function Recaptcha() {
  return (
    <div className="Chekbox">
        <ReCAPTCHA sitekey="6LchgQchAAAAAEEOlqUzP9Aif6sfxljPxqrWs622" onChange={onChange} />
    </div>
  )
}
