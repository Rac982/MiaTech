import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";

/**
 * 🔁 Lezione-3: Custom hook + paginazione dinamica
 * -----------------------------------------------
 * - Hook personalizzato `useFetch` per centralizzare logica di fetch.
 * - Stato per paginazione: `page` e `limit`.
 * - URL API costruito dinamicamente in base a `page` e `limit`.
 * - Paginazione con gestione dei pulsanti (prev/next disabilitati al limite).
 * - Visualizzazione tabella paginata con `posts`.
 * 
 * Hook usati:
 * - useState
 * - useEffect
 * - useFetch (custom hook)
 * 
 * Obiettivi:
 * - Separare la logica di fetch in un custom hook riutilizzabile.
 * - Usare useEffect per reagire a cambiamenti dello stato.
 * - Costruire componenti reattivi e scalabili.
 */

const App = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [urlPosts, setUrlPosts] = useState(`https://dummyjson.com/posts?limit=${limit}&skip=${limit * (page - 1)}`);

    const { data: posts, loading: loadingPosts, error: errorPosts } = useFetch(urlPosts);

    useEffect(() => {
        setUrlPosts(`https://dummyjson.com/posts?limit=${limit}&skip=${limit * (page - 1)}`);
    }, [page, limit]);

    if (loadingPosts) {
        return (
            <p>Loading...</p>
        )
    }

    if (errorPosts) {
        return (
            <p>{errorPosts}</p>
        )
    }
    
    return (
        <>
            {
                posts !== null && posts.posts.length > 0 && (
                    <div>
                        <button onClick={() => setPage(p => p - 1)} disabled={page <= 1}>Prev</button>
                        <span>{page} / {Math.ceil(posts.total / limit)}</span>
                        <button onClick={() => setPage(p => p + 1)} disabled={page >= Math.ceil(posts.total / limit)}>Next</button>
                    </div>
                )
            }
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts === null || posts.posts.length === 0 ? (
                            <tr>
                                <td colSpan={4}>Empty data</td>
                            </tr>
                        ) : (
                            posts.posts.map(({ id, userId, title, body }) => (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{userId}</td>
                                    <td>{title}</td>
                                    <td>{body}</td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default App;