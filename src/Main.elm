module Main exposing (..)

-- Press buttons to increment and decrement a counter.
--
-- Read how it works:
--   https://guide.elm-lang.org/architecture/buttons.html
--

import Browser
import Html exposing (Html, div, input, node, span, text)
import Html.Attributes exposing (src, value)
import Html.Events exposing (onInput)



-- MAIN


main =
    Browser.sandbox { init = init, update = update, view = view }



-- MODEL


type alias Model =
    String


init : Model
init =
    "/some/path"



-- UPDATE


type Msg
    = ChangeModel String


update : Msg -> Model -> Model
update msg model =
    case msg of
        ChangeModel str ->
            str



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ input [ onInput ChangeModel, value model ] []
        , span [] [ text (" (model: " ++ model ++ ")") ]

        -- monitor-messages is the custom element that expects a src attribute.
        , node "monitor-messages" [ src model ] []
        ]
