import css from "./SearchBox.module.css"
export default function SearchBox({ value, onChange }) {
    return (
        <>
            <div className={css.sb}>
                <label>Find contacts by name</label>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    );
}