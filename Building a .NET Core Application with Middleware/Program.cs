var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

/* HTTPS enforce */
app.UseHttpsRedirection();

/* Logging Middleware */
app.Use(async (context, next) =>
{
    Console.WriteLine($"Request: {context.Request.Method} {context.Request.Path}");
    await next();
    Console.WriteLine($"Response Status: {context.Response.StatusCode}");
});

/* Exception Handling */
app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        context.Response.ContentType = "text/html";
        await context.Response.WriteAsync("<h1>Application Error Occurred</h1>");
    });
});

/* Content Security Policy */
app.Use(async (context, next) =>
{
    context.Response.Headers.Add(
        "Content-Security-Policy",
        "default-src 'self'; script-src 'self'; style-src 'self';"
    );
    await next();
});

/* Serve Static Files */
app.UseStaticFiles();

/* Default response */
app.Run(async context =>
{
    await context.Response.WriteAsync(
        "Building a .NET Core Application with Middleware is running"
    );
});

app.Run();
