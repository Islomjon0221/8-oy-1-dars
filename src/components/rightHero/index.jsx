import React from "react";
import "./index.css";
import Edit from "../../assets/edit.svg";
import first from "../../assets/first.png";
import second from "../../assets/second.png";
import third from "../../assets/third.png";
import fourth from "../../assets/fourth.png";
import fiveth from "../../assets/fiveth.png";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { ChartContainer } from "@mui/x-charts";
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];
const settings = {
  width: 70,
  height: 70,
  value: 74,
};
const settings2 = {
  width: 70,
  height: 70,
  value: 26,
};
function RightHero() {
  return (
    <div className="rightHero">
      <div className="rightHero__header">
        <p className="rightHero__header__paragraph">1 oylik SMS lar</p>
        <div className="rightHero__header__div">
          <p className="rightHero__header__div__paragraph2">Umumiy</p>
          <p className="rightHero__header__div__paragraphTitle">1000 ta</p>
        </div>
        <div className="chartWrapper">
          <div className="rightHero__header__chart">
            <div>
              <Gauge
                {...settings}
                cornerRadius="74%"
                sx={(theme) => ({
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 15,
                  },
                  [`& .${gaugeClasses.valueArc}`]: {
                    fill: "#3DD598",
                  },
                  [`& .${gaugeClasses.referenceArc}`]: {
                    fill: theme.palette.text.disabled,
                  },
                })}
              />
            </div>
            <div className="rightBirBalo">
              <p className="ZerikibKetdim">740 ta</p>
              <p className="QachanTugedi">Yetib borgan</p>
            </div>
          </div>
          <div className="rightHero__header__chart">
            <div>
              {" "}
              <Gauge
                {...settings2}
                cornerRadius="74%"
                sx={(theme) => ({
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 15,
                  },
                  [`& .${gaugeClasses.valueArc}`]: {
                    fill: "#FF974A",
                  },
                  [`& .${gaugeClasses.referenceArc}`]: {
                    fill: theme.palette.text.disabled,
                  },
                })}
              />
            </div>
            <div className="rightBirBalo">
              <p className="ZerikibKetdim">260 ta</p>
              <p className="QachanTugedi">Hatolik bo’lgan</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rightHero__main">
        <div>
          <ChartContainer
            width={250}
            height={150}
            series={[{ type: "line", data: pData }]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
            sx={{
              [`& .${lineElementClasses.root}`]: {
                stroke: "#8884d8",
                strokeWidth: 2,
              },
              [`& .${markElementClasses.root}`]: {
                stroke: "#8884d8",
                scale: "0.6",
                fill: "#fff",
                strokeWidth: 2,
              },
            }}
            disableAxisListener
          >
            <LinePlot />
            <MarkPlot />
          </ChartContainer>
        </div>
        <div className="birnarsada">
          <div>
            <p className="title">234 ta</p>
            <p className="feedback">bu oygi feedbacklar</p>
          </div>
          <p className="orange">1.5%</p>
        </div>
      </div>
      <div className="rightHero__footer">
        <div>
          <p className="blackBold-text">Integratsiyalar</p>
        </div>
        <div className="footerWrapper">
          <div className="birnarsabuham">
            <img className="forCursor" src={first} alt="Website Footer Image" />
            <img className="forCursor" src={Edit} alt="Website Edit Icon" />
          </div>
          <div className="birnarsabuham">
            <img
              className="forCursor"
              src={second}
              alt="Website Footer Image"
            />
            <img className="forCursor" src={Edit} alt="Website Edit Icon" />
          </div>
          <div className="birnarsabuham">
            <img className="forCursor" src={third} alt="Website Footer Image" />
            <img className="forCursor" src={Edit} alt="Website Edit Icon" />
          </div>
          <div className="birnarsabuham">
            <img
              className="forCursor"
              src={fourth}
              alt="Website Footer Image"
            />
            <img className="forCursor" src={Edit} alt="Website Edit Icon" />
          </div>
          <div className="birnarsabuham">
            <img
              className="forCursor"
              src={fiveth}
              alt="Website Footer Image"
            />
            <img className="forCursor" src={Edit} alt="Website Edit Icon" />
          </div>
        </div>
        <hr />
        <div></div>
      </div>
    </div>
  );
}

export default RightHero;
