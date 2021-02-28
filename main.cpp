#include <QGuiApplication>
#include <QCoreApplication>
#include <QUrl>
#include <QString>
#include <QQuickStyle>
#include <QQmlApplicationEngine>

int main(int argc, char *argv[]) {
    QGuiApplication::setOrganizationName("rudi.timmermans");
    QGuiApplication::setApplicationName("rudi.timmermans");
    QGuiApplication::setAttribute(Qt::AA_EnableHighDpiScaling);

    QGuiApplication app(argc, argv);
    QQuickStyle::setStyle("Suru");

    QQmlApplicationEngine engine(QUrl(QStringLiteral("qml/Main.qml")));
    return app.exec();
}
