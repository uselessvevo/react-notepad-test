import "./style.css";

import React from "react";
import {useState, useEffect} from "react";
import {Button, ButtonPin, TextArea, Tooltip} from '@gravity-ui/uikit';
import {
    Person, Bell, BellDot, 
    FloppyDisk, NodesRight, Font, 
    Power, Rectangles4, Gear,
    TextAlignJustify, TextAlignCenter,
    TextAlignLeft, TextAlignRight,
    Underline, Italic, Bold,
    FontCase, Heading1, Heading2, Heading3
} from '@gravity-ui/icons';
import {ControlPanelProps, ScreensProps} from "./types";
import AppSettings from "../../components/app-settings/app-settings";

const createButtons = (buttons: ScreensProps[]) => {
    const mapButtons = buttons.map((s, i) => {
        var pinClassName: ButtonPin;
        if (i == buttons.length - buttons.length) {
            pinClassName = "circle-clear"
        } else if (i == buttons.length - 1) {
            pinClassName = "clear-circle"
        } else {
            pinClassName = "brick-brick"
        }
        return (
            <>
                <Tooltip content={s.title}>
                    <Button
                        size="l"
                        pin={pinClassName}
                        view="normal"
                        className={s.class || ""}
                        onClick={() => <AppSettings open={true}/>}
                    >
                        {s.icon}
                    </Button>
                </Tooltip>
            </>
        );
    });

    return mapButtons;
};

const ControlPanel: React.FC<ControlPanelProps> = (props: ControlPanelProps) => {
    const saveButtons: ScreensProps[] = [
        {"title": "Share", "href": "/habits", icon: <NodesRight/>},
        {"title": "Save", "href": "/habits", icon: <FloppyDisk/>},
    ];
    const alignButtons: ScreensProps[] = [
        {title: "Align justify", href: "/", icon: <TextAlignJustify/>},
        {title: "Align center", href: "/", icon: <TextAlignCenter/>},
        {title: "Align right", href: "/", icon: <TextAlignLeft/>},
        {title: "Align right", href: "/", icon: <TextAlignRight/>},
    ];
    const fontButtons: ScreensProps[] = [
        {title: "Font size", href: "/", icon: <FontCase/>},
        {title: "Heading 1", href: "/", icon: <Heading1/>},
        {title: "Heading 2", href: "/", icon: <Heading2/>},
        {title: "Heading 3", href: "/", icon: <Heading3/>},
    ];
    const styleButtons: ScreensProps[] = [
        {title: "Normal", href: "/", icon: <Font/>},
        {title: "Bold", href: "/", icon: <Bold/>},
        {title: "Italic", href: "/", icon: <Italic/>},
        {title: "Underline", href: "/", icon: <Underline/>},
    ];
    const etcButtons: ScreensProps[] = [
        {"title": "Profile", "href": "/profile", icon: <Person/>},
        {"title": "Settings", "href": "/habits", icon: <Gear/>},
    ];

    const mapSaveButtons = createButtons(saveButtons);
    const mapAlignButtons = createButtons(alignButtons);
    const mapStyleButtons = createButtons(styleButtons);
    const mapFontButtons = createButtons(fontButtons);
    const mapEtcButtons = createButtons(etcButtons);

    return (
        <div>
            <div className="control-panel-box">
                <div className="control-panel-items float-left">
                    {mapSaveButtons}
                </div>
                <div className="control-panel-items float-left">
                    {mapStyleButtons}
                </div>
                <div className="control-panel-items float-left">
                    {mapAlignButtons}
                </div>
                <div className="control-panel-items float-left">
                    {mapFontButtons}
                </div>
                <div className="control-panel-items float-right">
                    {mapEtcButtons}
                </div>
            </div>
        <div className="text-area-box">
            <div className="text-area">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eligendi recusandae quos corporis iusto odit minima quia libero quas 
                    nihil corrupti? Optio, deleniti asperiores nam architecto reiciendis 
                    eveniet esse ipsam quis!
                </p>
            </div>
        </div>

        </div>
    );
    
};

export default ControlPanel;