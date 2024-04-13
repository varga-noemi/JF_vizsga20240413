import React from 'react'
import { Card, CardTitle, CardBody, CardText, CardSubtitle, Button } from "reactstrap";

export const SinglePropertie = ({id, imageUrl, category, createAt, sellerName, area, rooms}) => {
  return (
    <div className="">
      <Card style={{width: "18rem", height: "100%"}}>
        <img alt={category} src={imageUrl} />
        <CardBody style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
          <CardTitle tag="h5">{category}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">A hirdetés feladásának dátuma:{createAt}</CardSubtitle>
          <CardText>Szobák száma:{rooms}</CardText>
          <CardText>Alapterület:{area} m2</CardText>
          <Button style={{backgroundColor: "darkblue"}}>{sellerName}</Button>
        </CardBody>
      </Card>
    </div>
  )
}
