import * as React from "react";
import "./PageContent.css";

export type PageContentProps = {
    poem: string;
    theme: string;
    imageURL: string;
}

export function PageContent({poem, theme, imageURL}: PageContentProps) {
    return (
        <>
            <div className={"TOT"}>
                <div className={"parteaStanga"}>
                    <div className={"poemHeaderText"}>
                        <p>This is a poem made just for you :)</p>
                    </div>
                    <div className={"poemContainer"}>
                        <div className={"poemContent"}>
                            {poem}
                        </div>
                        <div className={"readPoem"}>
                            <button className={"readPoemBtn"}>Read poem</button>
                        </div>
                    </div>
                </div>

                <div className={"parteaDreapta"}>
                    <div className={"specialTheme"}>
                        <div className={"pTheme"}>
                            <p>This is a special poem theme :* </p>
                        </div>
                        <div className={"themeContainer"}>
                            <div className={"themeContent"}>
                                {theme}
                            </div>

                        </div>
                        <div className={"readTheme"}>
                            <button className={"readThemeBtn"}>Read theme</button>
                        </div>
                    </div>
                    <div>
                        <div className={"pImage"}>
                            <p>This is a special image :D</p>
                        </div>
                    <div className={"imageContainer"}>
                        <div className={"imageContent"}>
                            {imageURL}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>

    );

}