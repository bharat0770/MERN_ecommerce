"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var material_1 = require("@mui/material");
var TransactionsTable = function (_a) {
    var data = _a.data;
    return (<material_1.Paper>
            <material_1.Table>
                <material_1.TableHead>
                    <material_1.TableRow>
                        <material_1.TableCell>Transaction ID</material_1.TableCell>
                        <material_1.TableCell>Discount</material_1.TableCell>
                        <material_1.TableCell>Amount</material_1.TableCell>
                        <material_1.TableCell>Status</material_1.TableCell>
                    </material_1.TableRow>
                </material_1.TableHead>
                <material_1.TableBody>
                    {data.map(function (transaction) { return (<material_1.TableRow key={transaction.id}>
                            <material_1.TableCell>{transaction.id}</material_1.TableCell>
                            <material_1.TableCell>{transaction.discount}</material_1.TableCell>
                            <material_1.TableCell>{transaction.amount}</material_1.TableCell>
                            <material_1.TableCell>{transaction.status}</material_1.TableCell>
                        </material_1.TableRow>); })}
                </material_1.TableBody>
            </material_1.Table>
        </material_1.Paper>);
};
exports.default = TransactionsTable;
