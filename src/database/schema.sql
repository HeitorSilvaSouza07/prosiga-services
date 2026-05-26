-- Script de criação de banco para SQL Server baseado nas entidades atuais
-- Ajuste os nomes e tipos conforme o modelo real, especialmente IdUser em tblClass.

SET NOCOUNT ON;

CREATE TABLE tblSubject (
    IdSub INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    SubName NVARCHAR(100) NOT NULL
);

CREATE TABLE tblPermissios (
    IdPer INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    PerKey NVARCHAR(255) NOT NULL,
    PerDesc NVARCHAR(1500) NOT NULL
);

CREATE TABLE tblUser (
    IdUser INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    UserName NVARCHAR(255) NOT NULL,
    UserCpf NVARCHAR(11) NOT NULL,
    UserType NVARCHAR(50) NOT NULL,
    UserPassword NVARCHAR(100) NOT NULL,
    UseAdmin BIT NOT NULL DEFAULT 0,
    IdSub INT NULL
);

CREATE TABLE tblClass (
    IdClass INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    ClassPeriod INT NOT NULL,
    ClassCurso NVARCHAR(255) NOT NULL,
    IdUser INT NOT NULL
);

CREATE TABLE tblActivities (
    IdActivities INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    IdUser INT NOT NULL,
    IdClass INT NOT NULL,
    ActivitieType NVARCHAR(100) NOT NULL,
    ActivitieTitle NVARCHAR(255) NOT NULL,
    ActivitieDescription NVARCHAR(1500) NOT NULL,
    ActivitieDataEnd DATETIME NOT NULL,
    ActivitieDataCreate DATETIME NOT NULL,
    CreatedAt DATETIME NOT NULL
);

CREATE TABLE tblSubmit (
    IdSubmit INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    IdActivities INT NOT NULL,
    IdUser INT NOT NULL,
    SubSenteAt DATE NOT NULL
);

CREATE TABLE tblUserPermission (
    IdUp INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    IdUser INT NOT NULL,
    IdPer INT NOT NULL
);

CREATE TABLE tblUserSubject (
    IdSubUse INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    IdUser INT NOT NULL,
    IdSub INT NOT NULL
);

ALTER TABLE tblUser
    ADD CONSTRAINT FK_tblUser_tblSubject FOREIGN KEY (IdSub)
        REFERENCES tblSubject (IdSub);

ALTER TABLE tblClass
    ADD CONSTRAINT FK_tblClass_tblUser FOREIGN KEY (IdUser)
        REFERENCES tblUser (IdUser);

ALTER TABLE tblActivities
    ADD CONSTRAINT FK_tblActivities_tblUser FOREIGN KEY (IdUser)
        REFERENCES tblUser (IdUser);

ALTER TABLE tblActivities
    ADD CONSTRAINT FK_tblActivities_tblClass FOREIGN KEY (IdClass)
        REFERENCES tblClass (IdClass);

ALTER TABLE tblSubmit
    ADD CONSTRAINT FK_tblSubmit_tblActivities FOREIGN KEY (IdActivities)
        REFERENCES tblActivities (IdActivities);

ALTER TABLE tblSubmit
    ADD CONSTRAINT FK_tblSubmit_tblUser FOREIGN KEY (IdUser)
        REFERENCES tblUser (IdUser);

ALTER TABLE tblUserPermission
    ADD CONSTRAINT FK_tblUserPermission_tblUser FOREIGN KEY (IdUser)
        REFERENCES tblUser (IdUser);

ALTER TABLE tblUserPermission
    ADD CONSTRAINT FK_tblUserPermission_tblPermissios FOREIGN KEY (IdPer)
        REFERENCES tblPermissios (IdPer);

ALTER TABLE tblUserSubject
    ADD CONSTRAINT FK_tblUserSubject_tblUser FOREIGN KEY (IdUser)
        REFERENCES tblUser (IdUser);

ALTER TABLE tblUserSubject
    ADD CONSTRAINT FK_tblUserSubject_tblSubject FOREIGN KEY (IdSub)
        REFERENCES tblSubject (IdSub);
