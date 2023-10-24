import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { fetchData } from "../utils";

const { Meta } = Card;
const Cards = ({ data }) => {
  return (
    <div style={styles.rootContainer}>
      {data?.length > 0 &&
        data?.map(
          (cardData) =>
            cardData?.title &&
            cardData?.multimedia?.length && (
              <Card
                style={styles.cards}
                key={cardData?.created_date}
                cover={
                  <img
                    src={cardData?.multimedia?.[0]?.url}
                    alt="Story-image"
                    width={"100%"}
                    height={220}
                    style={{
                      cursor: cardData?.url !== "null" ? "pointer" : "normal",
                    }}
                    onClick={() => {
                      if (cardData?.url !== "null")
                        window.open(cardData?.url, { target: "_blank" });
                    }}
                  />
                }
              >
                <span style={styles.sectionText}>{cardData?.section}</span>
                <Meta
                  title={cardData?.title}
                  description={cardData?.abstract}
                />
              </Card>
            )
        )}
    </div>
  );
};

export default Cards;

const styles = {
  display: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyImage: {
    height: 200,
    width: "100%",
  },
  cards: {
    boxShadow: "0px 0px 4px 0px #efefef",
    width: 300,
  },
  rootContainer: {
    display: "flex",
    gap: "1rem",
    flexFlow: "wrap",
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: "center",
    background: "#fafafa",
    padding: 0,
    margin: 0,
  },
  sectionText: {
    position: "absolute",
    top: -1,
    left: -1,
    textTransform: "capitalize",
    marginTop: 0,
    borderRadius: "0 0 5px 0",
    color: "#333",
    fontSize: "12px",
    padding: "4px 6px",
    background: "#fafafa",
  },
};
