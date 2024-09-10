import style from "./FooterNewsLetter.module.scss";

export const FooterNewsLetter = () => {
    return (
        <>
            <form className={style.formStyling}>
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name"/>
                <label htmlFor="name">Email</label>
                <input type="email" name="email"/>
            </form>
        </>
    )
}