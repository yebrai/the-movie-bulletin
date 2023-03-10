
import Image from "next/image";
import { movieDetailsProps } from "../../interface/movie";
import styles from './Overview.module.css'

export default function Overview({ details }: movieDetailsProps) {

    const minToHours = (minutes: number) => {
        return minutes !== 0 ? `${(minutes / 60) ^ 0}h ` + (minutes % 60) + 'min' : "N/A";
    };

    const numberWithCommas = (number: number): string => {
        return number !== 0 ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : "N/A";
    };

    const detailsGenres = details?.genres.map((genre: any) => genre.name).join(', ')
    const languages = details?.spoken_languages.map((lan: any) => lan.name).join(', ')
    
    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageCard}>
                        <Image src={`https://image.tmdb.org/t/p/w1280${details?.poster_path}`} fill={true} alt={details?.title ? details.title : ""} />
                    </div>
                </div>
                <div className={styles.detailsCointainer}>
                    <div>
                        <h1>Storyline</h1>
                        <p>{details?.overview}</p>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Release</td>
                                <td>{new Date(details?.release_date).toDateString()}</td>
                            </tr>
                            <tr>
                                <td>Runtime</td>
                                <td>{minToHours(details?.runtime)}</td>
                            </tr>
                            <tr>
                                <td>Budget</td>
                                <td>{numberWithCommas(details?.budget)}</td>
                            </tr>
                            <tr>
                                <td>Revenue</td>
                                <td>{numberWithCommas(details?.revenue)}</td>
                            </tr>
                            <tr>
                                <td>Genres</td>
                                <td>{detailsGenres}</td>
                            </tr>
                            <tr>
                                <td>Languages</td>
                                <td>{languages}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )

}