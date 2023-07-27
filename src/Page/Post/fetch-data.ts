import { useCallback, useState } from "react"
import { Either, left, match } from "../../utilities/Either"
import { NetworkError, captureErrors } from "../../utilities/error-handing"
import { Raw, PostWP, Post, Data } from "./types"




const URL = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
export const fetchData
    : () => Promise<Either<NetworkError, Raw>>
    = () => fetch(URL, { method: "POST" })
        .then(captureErrors<Raw>)
        .catch (err => left({ type: "FETCH_FAILED", err }))

export const useLoadedData = () => {

    const [data, setState] = useState<State>({ status: "mount" })

    const load = useCallback(() => {

        setState({ status: "loading" })
        fetchData().then(result => match(result,
            error => setState({ status: "error", error }),
            data => setState({ status: "fetched", value: data.map(decode) })
        ))
    }, [])

    return { data, load }
}


const decode
    : (data: PostWP) => Post
    = ({ _embedded, title, link, date, featured_media, type}) => ({
        title: title.rendered,
        link,
        type,
        date,
        media: {
            imgUrl: featured_media,
            title:  _embedded["wp:featuredmedia"]?.[0]?.title.rendered || "Post"
        },
        author: {
            link: _embedded.author[0]?.link || "",
            name: _embedded.author[0]?.name || "unknown"
        }
    })



type State
    = { status: "mount" }
    | { status: "loading" }
    | { status: "fetched", value: Data }
    | { status: "error", error: NetworkError }
