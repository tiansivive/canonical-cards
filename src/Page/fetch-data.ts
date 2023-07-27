import { useCallback, useState } from "react"
import { Either, left, match } from "../utilities/Either"
import { NetworkError, captureErrors } from "../utilities/error-handing"




const URL = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
export const fetchData
    : () => Promise<Either<NetworkError, Data>>
    = () => fetch(URL, { method: "POST" })
        .then(captureErrors<Data>)
        .catch (err => left({ type: "FETCH_FAILED", err }))

export const useLoadedData = () => {

    const [data, setState] = useState<State>({ status: "mount" })

    const load = useCallback(() => {

        setState({ status: "loading" })
        fetchData().then(result => match(result,
            error => setState({ status: "error", error }),
            value => setState({ status: "fetched", value })
        ))
    }, [])

    return { data, load }
}

type State
    = { status: "mount" }
    | { status: "loading" }
    | { status: "fetched", value: Data }
    | { status: "error", error: NetworkError }

export type Data = {}