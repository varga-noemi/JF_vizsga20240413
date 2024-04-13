import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import "./Home.css";

export const Home = () => {
  return (
    <div className="container">
      <div className="mw-1200px">
        <header
          style={{
            backgroundImage: `url(/public/background.png)`,
            height: "40vh",
          }}
        >
          <h1>Ingatlaniroda</h1>
        </header>

        <main>
          <div className="container-fluid">
            <h4 className="text-center">Ingatlanok minden kategóriában</h4>
            <div className="d-flex justify-content-center">
            <Card className='tipusok' style={{
                width: '30%',
            }}>
              <CardImg
                style={{
                  height: 200,
                  backgroundImage: `url(/haz.jpg)`,
                  backgroundSize: 'cover',
                }}
              />
              <CardBody>
                <CardTitle className="text-center" tag="h5">Házak</CardTitle>
              </CardBody>
            </Card>
            <Card className='tipusok' style={{
                width: '30%',
            }}>
              <CardImg
                style={{
                  height: 200,
                  backgroundImage: `url(/panel.jpg)`,
                  backgroundSize: 'cover',
                }}
              />
              <CardBody>
                <CardTitle className="text-center" tag="h5">Lakások</CardTitle>
              </CardBody>
            </Card>
            <Card className='tipusok' style={{
                width: '30%',
            }}>
              <CardImg
                style={{
                  height: 200,
                  backgroundImage: `url(/tanya.jpg)`,
                  backgroundSize: 'cover',
                }}
              />
              <CardBody>
                <CardTitle className="text-center" tag="h5">Nyaralók</CardTitle>
              </CardBody>
            </Card>


            </div>
          </div>
        </main>

        <footer></footer>
      </div>
    </div>
  );
};
