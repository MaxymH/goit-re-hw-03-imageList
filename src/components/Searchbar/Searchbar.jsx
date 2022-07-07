import s from './searchBar.module.css'

const Searchbar = () => {
    return (
        <header className={s.searchbar}>
    <form className={s.searchForm}>
    <button type="submit" className={s.button}>
        <span className={s.button_label}>Search</span>
    </button>

    <input
        className={s.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
    />
    </form>
    </header>
    )
}

export default Searchbar;