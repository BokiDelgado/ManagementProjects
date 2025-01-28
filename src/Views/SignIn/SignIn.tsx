
import { Input, Link } from "@heroui/react"
import image_form from "./../../assets/image/image_form.jpg"
import { useForm, SubmitHandler } from "react-hook-form"
import './SignIn.css'
import Alternative from "../../components/Auth/Alternative";
import ButtonGoogle from "../../components/Auth/ButtonGoogle";
import ButtonLogin from "../../components/Auth/ButtonLogin";


// interface FormInput{
//     email: string;
//     password: string;
// }

export default function SignIn() {

    const {
        formState: { errors },
        register,
        handleSubmit,
        reset, } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        
        reset()});

    return (
        <>
            {/* contenedor principal */}
            <section className="login__container">
                {/* contenedor de la izquierda */}
                <div className="login__left-container">
                    {/* contendedor del formulario */}
                    <div className="login__form-cotainer">
                        <h1 className="form__title">Iniciar Sesión</h1>
                        <ButtonGoogle text="Continuar con Google" />
                        <Alternative />


                        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
                           <div className="login_input_email">
                           <Input
                               // className="login__input_email"
                                label="Correo Electrónico"
                                placeholder="Ingresar correo"
                                radius="none"
                                type="email"
                                {...register("email", { required: true})}
                                />
                           </div>
                               
                                {errors.email && <span className="login_email_error">Es necesario ingresar correo electrónico</span>}
                               

                            <div className="login_input_pass">
                            <Input
                               // className="login__input_pass"
                                label="Contraseña"
                                placeholder="***"
                                radius="none"
                                type="password"
                                {...register("password", { required: true })}
                                />
                            </div>
                            
                                {errors.password && <span className="login_pass_error">Es necesario ingresar la contraseña</span>}
                             

                            <p className="login__forgot-password">
                                ¿Olvidaste la contraseña?
                            </p>
                            <ButtonLogin text="Iniciar" />
                        </form>


                        <p className="login__dont-account">
                            ¿No tienes una cuenta? <Link>Regístrate</Link>
                        </p>
                    </div>
                </div>

                {/* contenedor de la derecha */}
                <div className="login__right-container">
                    <img src={image_form} className="image_form" />
                </div>
            </section>
        </>
    )

}