import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [form, setForm] = useState({
    name: "",
    url: "",
  });

  const linkImageStyle = {
    backgroundImage:
      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png")',
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.url.trim()) return;

    const newBookmark = {
      id: Date.now(),
      name: form.name,
      url: form.url,
    };

    setBookmarks((prev) => [...prev, newBookmark]);

    setForm({ name: "", url: "" });
  }

  return (
    <>
      <nav className="navigation">
        <a>
          <img
            height="40px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            alt="React Logo"
          />
        </a>
        <ul>
          <li>Home</li>
        </ul>
      </nav>

      <main>
        <div className="leftContent">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            alt="React Icon"
          />

          <form onSubmit={handleSubmit}>
            <h2 className="formTitle">Add a bookmark</h2>

            <div>
              <label htmlFor="name" className="formLabel">
                Bookmark name:
              </label>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                placeholder="25 characters max"
                minLength={1}
                maxLength={25}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="url" className="formLabel">
                Bookmark link:
              </label>
              <input
                required
                type="url"
                name="url"
                value={form.url}
                minLength={7}
                placeholder="https://example.com/"
                onChange={handleChange}
              />
            </div>

            <button type="submit">Add</button>
          </form>
        </div>

        <div className="rightContent">
          <h2 className="formTitle">Your Bookmarks</h2>

          {bookmarks.map((bm) => (
            <div className="linkCard" key={bm.id}>
              <div className="linkCardImage" style={linkImageStyle}></div>
              <div className="linkCardLink">
                <h2>
                  <a href={bm.url}>{bm.name}</a>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
