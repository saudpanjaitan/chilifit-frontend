import { useEffect, useState } from "react";
import axios from "axios";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://chilifit-capstone-project.et.r.appspot.com/api/articles")
      .then((response) => {
        console.log("Articles response:", response.data); // Tambahkan log ini
        setArticles(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the articles!", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4">Articles</h1>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image URL</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{article.id}</td>
              <td>{article.title}</td>
              <td>{article.description}</td>
              <td>
                <a
                  href={article.image_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Image
                </a>
              </td>
              <td>{new Date(article.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
