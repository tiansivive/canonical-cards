import { Either, left, right } from "../utilities/Either"






export const captureErrors
    : <Data>(response: Response) => Promise<Either<NetworkError, Data>>
    = res => {
        if (!res.ok) return Promise.resolve(
            left({ type: "HTTP_ERROR", status: res.status, details: res.statusText })
        )
            
        return res.json()
            .then(right)
            .catch(err => left({ type: "JSON_PARSE", err }))
    }


export type NetworkError
    = { type: "JSON_PARSE", err: Error }
    | { type: "FETCH_FAILED", err: Error }
    | { type: "HTTP_ERROR", status: number, details: string }