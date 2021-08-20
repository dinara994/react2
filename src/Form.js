import React from "react";

const From = () => {
    return (
        <div>
            <form>
                <label>
                    Имя:
                    <input type="text" name='name'/>
                </label>
                <button>Отправить</button>
            </form>
        </div>
    )
}
export default From