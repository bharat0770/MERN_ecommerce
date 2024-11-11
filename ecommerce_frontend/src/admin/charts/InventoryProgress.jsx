"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var material_1 = require("@mui/material");
var InventoryProgress = function (_a) {
    var data = _a.data;
    return (<>
            <material_1.Box>
                {data.map(function (_a) {
            var name = _a.name, value = _a.value;
            return (<material_1.Box key={name} mb={2} display="flex" alignItems={"center"} justifyContent={"space-around"}>
                            <material_1.Typography variant="h6">{name}</material_1.Typography>
                            <material_1.LinearProgress variant="determinate" value={value} sx={{ width: "50%", borderRadius: 5 }}/>
                                <material_1.Typography variant="h6">{"".concat(value, "%")}</material_1.Typography>
                        </material_1.Box>);
        })}
            </material_1.Box>
        </>);
};
exports.default = InventoryProgress;
