
export type Left<E> = {
  readonly _tag: 'Left'
  readonly value: E
}

export type Right<A> = {
  readonly _tag: 'Right'
  readonly value: A
}

export type Either<E, A> = Left<E> | Right<A>


export const left
    : <E = never, A = never>(e: E) => Either<E, A>
    = value => ({ _tag: "Left", value })

export const right
    : <E = never, A = never>(value: A) => Either<E, A>
    = value => ({ _tag: "Right", value })

export const match
    : <E, A, B>(either: Either<E, A>, onLeft: (e: E) => B, onRight: (a: A) => B) => B
    = (either, onLeft, onRight) => {
        if (either._tag === "Left") return onLeft(either.value)
        
        return onRight(either.value)
    } 

export const map
    : <A, B, E>(either: Either<E, A>, f: (a: A) => B) => Either<E, B>
    = (either, f) => either._tag === "Left"
        ? either
        : right(f(either.value)) 
