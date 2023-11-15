import { memo } from "react";
import { CardComp } from "../../components";
import it_network from "../../assets/svgIcons/it_network.svg";
import magnifier from "../../assets/svgIcons/magnifier.svg";
import trush from "../../assets/svgIcons/trush.svg";
import information_3 from "../../assets/svgIcons/information_3.svg";
import { Grid, Typography } from "@mui/material";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

const Dashboard = () => {
  const cardItems = [
    {
      title: "252",
      icon: it_network,
      subTitle: "Links Scraped",
      background: "#EEF6FF",
      border: "#3E97FF",
    },
    {
      title: "252",
      icon: magnifier,
      subTitle: "Links Manually Checked",
      background: "#F8F5FF",
      border: "#7239EA",
    },
    {
      title: "252",
      icon: information_3,
      subTitle: "Link Violations",
      background: "#F8F5FF",
      border: "#F6C000",
    },
    {
      title: "252",
      icon: trush,
      subTitle: "Links Removed",
      background: "#F8F5FF",
      border: "#F1416C",
    },
  ];

  return (
    <Grid style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <Grid
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          gap: "8px",
          padding: "13px 12px",
        }}>
        <Grid
          style={{
            width: 116,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Typography
            style={{ color: "#3F4254", fontSize: "12px", fontWeight: 600 }}>
            Today
          </Typography>
          <Icon
            path={mdiChevronDown}
            height={20}
            width={20}
            color={"#7E8299"}
          />
        </Grid>
        <Typography
          style={{ color: "#7E8299", fontSize: "14px", fontWeight: 500 }}>
          Sort by
        </Typography>
      </Grid>

      <Grid style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        {cardItems.map((item) => {
          return (
            <CardComp
              title={item.title}
              icon={item.icon}
              subTitle={item.subTitle}
              background={item.background}
              border={item.border}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default memo(Dashboard);
