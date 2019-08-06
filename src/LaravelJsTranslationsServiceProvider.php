<?php

namespace Gertjanroke\LaravelJsTranslations;

use Illuminate\Support\ServiceProvider;

class LaravelJsTranslationsServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        if ( $this->app->runningInConsole() ) {

            $this->publishes( [
                __DIR__ . '/../config/js-translations.php' => $this->path( 'js-translations.php', 'config' ),
            ], 'config' );

            $this->publishes( [
                __DIR__ . '/../resources/js/lib/' => $this->path( 'js', 'resources' ),
            ], 'assets' );
        }
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom( __DIR__ . '/../config/js-translations.php', 'js-translations' );
    }

    /**
     * @param string $path
     *
     * @return string
     */
    protected function path( $path = '', $basePath = '' )
    {
        return app()->basePath( $basePath ) . ( $path ? DIRECTORY_SEPARATOR . $path : $path );
    }
}
