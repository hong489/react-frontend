import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import welcomeImg from "../../assets/media/welcome-banner.png";
import { TabView, TabPanel } from 'primereact/tabview';

const Dashboard = (props) => {
    const history = useHistory();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => { }, []);

    const contentStyle = {
        width: '1000px',      // Adjust the width as needed
        height: '600px',
        margin: '0 auto'   // Center the content horizontally
    };

    const commonPrerequisites = (
        <ul>
            <li>
                <a
                    href="https://code.visualstudio.com/download"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visual Studio Code
                </a>{" "}
                text editor
            </li>
            <li>
                <a
                    href="https://git-scm.com/downloads"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    git
                </a>{" "}
                to download your project from GitHub and manage version control
            </li>
        </ul>
    );


    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="p-tabview p-component">
                <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                    <TabPanel header="MERN">
                        <div className="col-10" style={contentStyle}>
                            <div className="card grid flex flex-column">
                                <h1 className="col-12 lg:col-10 font-bold">
                                    1. Install JavaScript dependencies
                                </h1>
                                <p className="m-0">Prepare your machine for development</p>
                                {commonPrerequisites}
                                <p className="m-0">MERN or MEAN stack prerequisites are:</p>
                                <ul>
                                    <li>
                                        <a
                                            href="https://nodejs.org/en/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            NodeJS
                                        </a>{" "}
                                        version 16 and above recommended
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.mongodb.com/docs/manual/administration/install-community/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            MongoDB
                                        </a>{" "}
                                        database and{" "}
                                        <a
                                            href="https://www.mongodb.com/products/compass"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            MongoDB Compass
                                        </a>{" "}
                                        a GUI tool to manage your database
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.docker.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Docker
                                        </a>{" "}
                                        to run your project in containers (optional)
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.postman.com/downloads/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Postman
                                        </a>{" "}
                                        to test your API endpoints (optional)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="JHipster">
                        <div className="col-10" style={contentStyle}>
                            <div className="card grid flex flex-column">
                                <h1 className="col-12 lg:col-10 font-bold">
                                    1. Install JHipster and Prerequisites
                                </h1>
                                <p className="m-0">Prepare your machine for development</p>
                                {commonPrerequisites}
                                <p className="m-0">To start using JHipster for your projects, follow these steps:</p>
                                <ul>
                                    <li>
                                        Install Java Development Kit (JDK):
                                        <ul>
                                            <li>
                                                Download and install the latest version of the JDK from{" "}
                                                <a
                                                    href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Oracle's website
                                                </a>
                                                .
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Install Node.js and Yarn:
                                        <ul>
                                            <li>
                                                Download and install Node.js from{" "}
                                                <a
                                                    href="https://nodejs.org/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    nodejs.org
                                                </a>
                                                .
                                            </li>
                                            <li>
                                                After installing Node.js, open your command prompt or terminal and run:
                                                <pre className="m-0">npm install -g yarn</pre>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Install JHipster CLI:
                                        <ul>
                                            <li>
                                                Open your command prompt or terminal and run:
                                                <pre className="m-0">npm install -g generator-jhipster</pre>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <p className="m-0">
                                    With JHipster and its prerequisites installed, you're ready to create and develop
                                    modern web applications and microservices.
                                </p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="Python Django">
                        <div className="col-10" style={contentStyle}>
                            <div className="card grid flex flex-column" >
                                <h1 className="col-12 lg:col-10 font-bold">
                                    Install Python and Django Dependencies
                                </h1>
                                <p className="m-0">Prepare your machine for development</p>
                                {commonPrerequisites}
                                <p className="m-0">To start developing with Python and Django, follow these steps:</p>
                                <ul>
                                    <li>
                                        Install Python:
                                        <ul>
                                            <li>
                                                Download and install the latest version of Python from{" "}
                                                <a
                                                    href="https://www.python.org/downloads/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    python.org
                                                </a>
                                                .
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Install Django:
                                        <ul>
                                            <li>
                                                After installing Python, open your command prompt or terminal and run:
                                                <pre className="m-0">pip install Django</pre>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="PHP Laravel">
                        <div className="col-10" style={contentStyle}>
                            <div className="card grid flex flex-column">
                                <h1 className="col-12 lg:col-10 font-bold">
                                    Install PHP and Laravel Dependencies
                                </h1>
                                <p className="m-0">Prepare your machine for development</p>
                                {commonPrerequisites}
                                <p className="m-0">To start developing with PHP and Laravel, follow these steps:</p>
                                <ul>
                                    <li>
                                        Install PHP:
                                        <ul>
                                            <li>
                                                Download and install the latest version of PHP from{" "}
                                                <a
                                                    href="https://www.php.net/downloads"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    php.net
                                                </a>
                                                .
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Install Composer:
                                        <ul>
                                            <li>
                                                After installing PHP, install Composer from{" "}
                                                <a
                                                    href="https://getcomposer.org/download/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    getcomposer.org
                                                </a>
                                                .
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Install Laravel CLI:
                                        <ul>
                                            <li>
                                                After installing Composer, open your command prompt or terminal and run:
                                                <pre className="m-0">composer global require laravel/installer</pre>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="C# and .NET Core">
                        <div className="col-10" style={contentStyle}>
                            <div className="card grid flex flex-column">
                                <h1 className="col-12 lg:col-10 font-bold">
                                    Install C# and .NET Core Dependencies
                                </h1>
                                <p className="m-0">Prepare your machine for development</p>
                                {commonPrerequisites}
                                <p className="m-0">To start developing with C# and .NET Core, follow these steps:</p>
                                <ul>
                                    <li>
                                        Install .NET Core SDK:
                                        <ul>
                                            <li>
                                                Download and install the latest version of .NET Core SDK from{" "}
                                                <a
                                                    href="https://dotnet.microsoft.com/download/dotnet"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    dotnet.microsoft.com
                                                </a>
                                                .
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Install a C# IDE:
                                        <ul>
                                            <li>
                                                You can use Visual Studio or Visual Studio Code as your C# IDE.
                                                Download and install the IDE of your choice.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Create a New .NET Core Project:
                                        <ul>
                                            <li>
                                                Open your command prompt or terminal and run:
                                                <pre className="m-0">dotnet new console -n MyConsoleApp</pre>
                                                This will create a new console application named MyConsoleApp.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TabPanel>
                </TabView>
            </div>

            {/* ... (same as before) */}
        </div>
    );
};

const mapState = (state) => {
    //
    return {};
};

const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(Dashboard);
