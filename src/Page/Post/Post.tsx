import classNames from "classnames"
import { Post as PostData } from "./types"


import styles from './Post.module.scss'
import { Card, Col } from "@canonical/react-components"
import { months } from "../../utilities/dates"

export const Post
    : React.FC<PostData>
    = ({ title, link, media, date, type, author }) => {

        const _date = new Date(date)
        const formattedDate = `${_date.getDay()} ${months[_date.getMonth()]} ${_date.getFullYear()}`
        return (
            <Col size={ 4 }>
                <Card title={ media.title.toUpperCase() }>
                    <hr className="u-sv1" />
                    <a href={ link }> <img alt="media" className={ classNames(styles.image, "p-card__image") } src={ media.imgUrl } /></a>
                    <div>
                        <a href={ link }><h3 className={ classNames(styles.title, "is-accent") }> { title }</h3></a>
                        <em>by <a href={ author.link }>{ author.name }</a> on { formattedDate } </em>
                    </div>
                    <hr className="u-sv1" />
                    <small> { capitalize(type) } </small>

                </Card>
            </Col>


        )
    }

const capitalize
    : (str: String) => String
    = str => {
        if (str === "") return ""
        const first = str[0]
        return first.toUpperCase() + str.substring(1)
    } 